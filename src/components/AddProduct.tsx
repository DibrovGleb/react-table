import { ChangeEvent, useState } from 'react'
import '../style/addproduct.sass'

const AddProduct = ()=>{
    const [value, setSelected] = useState('0'),
          [radio,setRadio] = useState('false')

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setRadio(e.target.value)

        console.log(radio)
    }
    return(
        <form action="">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Название товара"/>
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Email" />
            <label htmlFor="count">Count:</label>
            <input type="number" id="count" />
            <div id='delivery-container'>
                <div className='delivery wrapper'>
                    <label htmlFor="select-choice">Delivery:</label>
                    <select name="select-choice" id="select-choice" onChange={e => setSelected(e.target.value)} >
                    <option value="0"></option>
                    <option value="country">Страна</option>
                    <option value="city">Город</option>
                    </select>
                </div>
                {value == 'country' && <><hr></hr> 
                <div className='country wrapper'>
                    <div>
                    <input type="radio" id="radio1" name="radios" value="Россия" onChange={handleChange}/>
                    <label htmlFor="radio1">Россия</label>
                    </div>
                    <div>
                    <input type="radio" id="radio2" name="radios" value="США" onChange={handleChange}/>
                    <label htmlFor="radio2">США</label>
                    </div>
                    <div>
                    <input type="radio" id="radio3" name="radios" value="Япония" onChange={handleChange}/>
                    <label htmlFor="radio3">Япония</label>
                    </div>
                </div></>}
                {value == 'city' && <><hr></hr>
                <div className='city wrapper'>
                    <div>
                    <input type="checkbox" id="check1" name="checkboxes" />
                    <label htmlFor="check1">Москва</label>
                    </div>
                    <div>
                    <input type="checkbox" id="check2" name="checkboxes"/>
                    <label htmlFor="check2">Питер</label>
                    </div>
                    <div>
                    <input type="checkbox" id="check3" name="checkboxes"/>
                    <label htmlFor="check3">Саратов</label>
                    </div>
                </div></>}
            </div>
            
        <button>Submit</button>
        </form>
    )
}

export default AddProduct