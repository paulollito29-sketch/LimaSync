export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}

export function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validateForm(fields: Record<string, string>) {
  const errors: Record<string, string> = {}

  if (!fields.name?.trim()) errors.name = "El nombre es obligatorio"
  if (!fields.email?.trim()) errors.email = "El email es obligatorio"
  else if (!validateEmail(fields.email)) errors.email = "Ingresa un email válido"
  if (!fields.company?.trim()) errors.company = "La empresa es obligatoria"
  if (!fields.message?.trim()) errors.message = "El mensaje es obligatorio"

  return errors
}
