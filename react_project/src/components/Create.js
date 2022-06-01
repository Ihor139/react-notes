import {useState} from "react";
import env from '../env.json'

export default function Create() {
  const [url, setUrl] = useState()
  const [lineClass, setLineClass] = useState('hide')
  const [formClass, setFormClass] = useState()

  let loadDataFromForm = (evt) => {
    evt.preventDefault();
    let note = evt.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('Заполните поле');
      return false;
    }
    sendData({"note": note})
  }
  let sendData = (obj) => {
    setFormClass('hide')
    setLineClass('')
    fetch(env.urlBackend, {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(obj)
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.result) {
          setUrl(env.url + '/' + resp.url)
        }
      })
  }
  let searchNote = () => {
    window.location.href = env.url
  }
  return (
    <div className='container-fluid'>
      <div className="row g-4 mt-0">
        <form onSubmit={loadDataFromForm} className={formClass}>
          <label htmlFor="note" className='form-label'>Текст заметки</label>
          <textarea name="note" placeholder='Введите текст' id='note' className='form-control'/>
          <button type="submit" className="btn btn-primary mt-3">Создать</button>
        </form>
        <div className={lineClass}>
          <h5 className='mb-0'>Скопируйте ссылку</h5>
          <p className='text-danger mb-3'>(данная ссылка исчезнет как только Вы покинете страницу)</p>
          <h3 className='mb-4'>{url}</h3>
          <div>
            <button onClick={searchNote} className='btn btn-primary'>Добавить новую
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}