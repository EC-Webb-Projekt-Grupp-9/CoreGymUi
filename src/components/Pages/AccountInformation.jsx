import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import gymTraining from '../../assets/images/gymtraining.svg'
import './AccountInformation.css'
import { ADDRESS } from "../../assets/js/config";

const AccountInformation = () => {
    const [formData, setFormData] = useState()
    const [user, setUser] = useState(null)

    useEffect( () => {
        fetchUser()
    }, [])

    async function fetchUser() {
        const res = await fetch(`${ADDRESS}/api/auth/pingauth`, {
            method: "GET",
            credentials: "include"})
        const jsonData = await res.json()
        setUser(jsonData.result)
    }

    return (
    <section>
        <Hero
        title="My Pages"
        backgroundImage={gymTraining}
        />  

        <div className='page-container'>
            <div className='account-info-box'> 
                <div className='account-info'>
                    <span>Name: {user?.firstName || "Loading..."} {user?.lastName || "Loading..."} </span>
                    <span>Email: {user?.email || "Loading..."}</span>
                </div>
                <form action="" className='form-group'>
                    <div className='form-field'>
                        <i class="bi bi-envelope"></i>
                        <input className='form-input' type="text" placeholder='Ny Email' />
                    </div>

                    <div className='form-field'>
                        <i class="bi bi-lock-fill"></i>
                        <input className='form-input' type="text" placeholder='Nytt Lösenord'/>
                    </div>

                    <div className='form-field'>
                        <i class="bi bi-lock-fill"></i>
                        <input className='form-input' type="text" placeholder='Bekräfta nytt Lösenord'/>
                    </div>

                    <div className='form-field'>
                        <i class="bi bi-lock-fill"></i>
                        <input className='form-input' type="text" placeholder='Nuvarande Lösenord' />
                    </div>

                    <button className='save-btn'>Spara</button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default AccountInformation