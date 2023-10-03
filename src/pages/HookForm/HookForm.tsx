import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './HookForm.module.css'
import { DevTool } from '@hookform/devtools'

const HookForm = () => {
  const form = useForm()
  const { register, control } = form

  //   const {name, ref, onChange, onBlur}=register("username");

  return (
    <>
      <div className={container}>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register('username')} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register('email')} />

          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register('channel')} />

          <button>Submit</button>
        </form>
        <DevTool control={control} />
      </div>
    </>
  )
}

const { container } = styles

export default HookForm
