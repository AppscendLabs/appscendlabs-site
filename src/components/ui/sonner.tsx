'use client'
import { Toaster as SonnerToaster, toast as sonnerToast, type ToasterProps } from 'sonner'

export function Toaster(props: ToasterProps) {
  return <SonnerToaster position="top-right" richColors closeButton {...props} />
}
export const toast = sonnerToast
