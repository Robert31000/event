import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function EventForm({ registerEvent }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name:  '',
      room:  'Sala1',
      start: '09:00',
      end:   '10:00'
    }
  })

  const onSubmit = data => {
    const res = registerEvent(data)
    if (res.ok) {
      toast.success('Evento registrado ')
      reset({ ...data, name: '' })
    } else {
      toast.error(res.error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 md:grid-cols-4"
      noValidate
    >
      <label className="flex flex-col">
        Nombre
        <input
          {...register('name', { required: 'El nombre es obligatorio' })}
          className="border p-2 rounded"
          placeholder="Nombre del evento"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </label>

      <label className="flex flex-col">
        Sala
        <input
          {...register('room', { required: 'La sala es obligatoria' })}
          className="border p-2 rounded"
          placeholder="Sala asignada"
        />
        {errors.room && (
          <span className="text-red-500 text-sm">{errors.room.message}</span>
        )}
      </label>

      <label className="flex flex-col">
        Inicio
        <input
          type="time"
          {...register('start', { required: 'La hora de inicio es obligatoria' })}
          className="border p-2 rounded"
        />
        {errors.start && (
          <span className="text-red-500 text-sm">{errors.start.message}</span>
        )}
      </label>

      <label className="flex flex-col">
        Fin
        <input
          type="time"
          {...register('end', { required: 'La hora de fin es obligatoria' })}
          className="border p-2 rounded"
        />
        {errors.end && (
          <span className="text-red-500 text-sm">{errors.end.message}</span>
        )}
      </label>

      <button
        type="submit"
        className="md:col-span-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Registrar evento
      </button>
    </form>
  )
}
