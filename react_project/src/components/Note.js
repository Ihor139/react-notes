import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import env from "../env.json";

export default function Note() {
  let {noteUrl} = useParams()
  const [noteText, setNoteText] = useState()
  const [lineClass, setLineClass] = useState('hide')
  const [formClass, setFormClass] = useState('hide')
  const [errorClass, setErrorClass] = useState('hide')

  useEffect(() => {
    if (noteUrl !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({"url": noteUrl})
      })
        .then(resp => resp.json())
        .then(resp => {
          if (resp.result) {
            setNoteText(resp.note)
            setLineClass('')
            setFormClass('hide')
          } else {
            setLineClass('hide')
            setFormClass('')
            setErrorClass('')
          }
        })
    } else {
      setLineClass('hide')
      setFormClass('')
      setErrorClass('hide')
    }
  }, [])

  let getNote = (evt) => {
    evt.preventDefault()
    let url = evt.target.elements.note.value
    url = url.trim()
    if (url === '') {
      alert('Заполните поле')
      return false
    }
    noteUrl = url
    window.location.href = env.url + '/' + url
  }
  let searchNote = () => {
    window.location.href = env.url
  }

  return (
    <div className='container-fluid'>
      <div className="row g-4 mt-0">
        <div className={lineClass}>
          <h4>Заметка</h4>
          <p className='text-dark'>{noteText}</p>
          <div>
            <button onClick={searchNote} className="btn btn-primary mt-3">Смотреть ещё</button>
          </div>
        </div>
        <div className={errorClass}>
          <p className='text-danger'>Такая заметка не найдена!!</p>
        </div>
        <div className={formClass + 'mb-3'}>
          <form onSubmit={getNote}>
            <label htmlFor="url" className='form-label'>Введите hash для поиска заметки</label>
            <input type="text" id='url' name='note' className='form-control' placeholder='hash'/>
            <button type="submit" className="btn btn-primary mt-3">Найти заметку</button>
          </form>
        </div>
      </div>
    </div>

  );
}