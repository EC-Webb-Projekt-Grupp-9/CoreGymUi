// validateForm.js

export const validateForm = (formData) => {
  const errors = {};

  // Validera titel
  if (!formData.titel.trim()) {
    errors.titel = 'Titel är obligatorisk';
  }

  // Validera beskrivning
  if (!formData.beskrivning.trim()) {
    errors.beskrivning = 'Beskrivning är obligatorisk';
  }

  // Validera datum
  if (!formData.datum) {
    errors.datum = 'Datum är obligatoriskt';
  }

  // Validera tid
  if (!formData.tid.trim()) {
    errors.tid = 'Tid är obligatorisk';
  }

  // Validera plats
  if (!formData.plats.trim()) {
    errors.plats = 'Plats är obligatorisk';
  }

  // Validera antal deltagare
  if (!formData.antal.trim()) {
    errors.antal = 'Max antal deltagare är obligatoriskt';
  } else if (isNaN(formData.antal) || Number(formData.antal) <= 0) {
    errors.antal = 'Ange ett giltigt antal';
  }

  // Validera instruktör
  if (!formData.instruktor.trim()) {
    errors.instruktor = 'Instruktör är obligatorisk';
  }

  return errors;
};