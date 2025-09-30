import React, { useState } from 'react'
import './Form.css'
import { validateForm } from './ValidateForm'

function Form({ onClose }) {

   const [formData, setFormData] = useState({
    titel: '',
    beskrivning: '',
    datum: '',
    tid: '',
    plats: '',
    antal: '',
    instruktor: '',
  });

   const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
      e.preventDefault();

      // Validera formuläret
      const newErrors = validateForm(formData);

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      console.log('Formulärdata:', formData);
      alert('Formuläret skickat! (Se konsolen för data)');
      onClose && onClose();
  };

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Rensa felet för detta fält när användaren börjar skriva
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCancel = () => {
    onClose && onClose();
  };

  return (
    <div className="form-container">
        <h2>Lägg till pass</h2>
      <form action="" className='passform' aria-required onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="titel">Titel</label>
          <input type="text" name='titel' id='titel' placeholder='Titel' onChange={handleChange}   value={formData.titel} className={errors.titel ? 'error' : ''} />
           {errors.titel && <span className="error-message">{errors.titel}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="beskrivning">Beskrivning</label>
          <textarea name='beskrivning' placeholder='Beskrivning'  value={formData.beskrivning} onChange={handleChange} className={errors.beskrivning ? 'error' : ''}> </textarea>
          {errors.beskrivning && <span className="error-message">{errors.beskrivning}</span>}
        </div>


        <div className="form-group">
          <label htmlFor="datum">Datum</label>
          <input type="date" name="datum" id="datum" onChange={handleChange} value={formData.datum} className={errors.datum ? 'error' : ''} />
           {errors.datum && <span className="error-message">{errors.datum}</span>}
        </div>


        <div className="form-group">
          <label htmlFor="tid">Tid</label>
          <input type='time' name='tid' placeholder='tid'   value={formData.tid} onChange={handleChange} className={errors.tid ? 'error' : ''} />
           {errors.tid && <span className="error-message">{errors.tid}</span>}
        </div>

        <div className='antalDeltagare'>


          <div className="form-group">
            <label htmlFor="plats">Plats</label>
            <input type="text" name='plats' id='plats'  value={formData.plats} onChange={handleChange} className={errors.plats ? 'error' : ''} />
             {errors.plats && <span className="error-message">{errors.plats}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="antal">Max Antal Deltagere</label>
            <input type="number" name='antal' id='antal'  value={formData.antal} onChange={handleChange} className={errors.antal ? 'error' : ''} />
             {errors.antal && <span className="error-message">{errors.antal}</span>}
          </div>

        </div>

        <div className="form-group">
          <label htmlFor="Instruktor">Instruktör</label>
          <input type="text" name='instruktor' id='instruktor'  value={formData.instruktor} onChange={handleChange} className={errors.instruktor ? 'error' : ''} />
           {errors.instruktor && <span className="error-message">{errors.instruktor}</span>}
        </div>

        <div className="button-group">
          <button type='button' className='btn-cancel' onClick={handleCancel}>Avbryt</button>
          <button type='submit' className='btn-continue'>Forsätt</button>
        </div>


      </form>
    </div>
  )
}

export default Form