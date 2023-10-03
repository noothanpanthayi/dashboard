import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './HookForm.module.css'

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  //   const handleSubmit=(e:React.FormEvent)=>{
  //   return true
  //   }

  const formError: any = errors
  return (
    <>
      <div className={container}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
        >
          <input
            {...register('firstName', { required: 'This is required' })}
            name="firstName"
            placeholder="First Name"
          />
          {formError.firstName?.message && (
            <div>{formError.firstName.message}</div>
          )}
          <input
            {...register('lastName', { required: 'Last Name is required' })}
            name="lastName"
            placeholder="Last Name"
          />
          {formError.lastName?.message && (
            <div>{formError.lastName.message}</div>
          )}
          <input type="submit" />
        </form>
      </div>
    </>
  )
}

const { container } = styles

export default HookForm
