import { useState } from 'react';
import { City, Country, countries } from './redux/delivery';

const DeliveryOptions: React.FC = () => {
    const [delivery, setDelivery] = useState<string>(''),
          [selectedCountry, setSelectedCountry] = useState<Country | null>(null),
          [selectedCities, setSelectedCities] = useState<City[]>([])

    const handleCountryChange = (country: Country) => {
        setSelectedCountry(country)
        setSelectedCities([])
    }

    const handleCityChange = (city: City) => {
        const newCities = [...selectedCities]

        // Update selectedCities based on checkbox state
        newCities.includes(city) ? newCities.splice(newCities.indexOf(city), 1)
        : newCities.push(city)
        setSelectedCities(newCities)
    }

    const isDeliveryAvailable = () => {
        return !selectedCountry || (selectedCountry && selectedCities.length > 0);
    }

    return (
        <>
            <div className="delivery wrapper">
                <label htmlFor="select-choice">Delivery:</label>
                <select name="select-choice" id="select-choice" 
                value={delivery} onChange={(e) =>setDelivery(e.target.value)}>
                    <option value=""></option>
                    <option value="country">Страна</option>
                    <option value="city" disabled={!selectedCountry}>Город</option>
                </select>
            </div>
            {delivery === 'country' && (
                <div className="city wrapper">
                    {countries.map((country: Country) => (
                        <div key={country.id}>
                            <input type="radio" key={country.name} id={country.name}
                            name="radios" onChange={() => handleCountryChange(country)}/>
                            <label htmlFor={country.name}>{country.name}</label>
                        </div>
                    ))}
                </div>
            )}
            {(selectedCountry && delivery === 'city') && (
                <div className="city wrapper">
                    {selectedCountry.cities.map((city: City) => (
                        <div key={city.id}>
                            <input type="checkbox" key={city.name} id={city.name}
                            name="cities" onChange={() => handleCityChange(city)}/>
                            <label htmlFor={city.name}>{city.name}</label>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default DeliveryOptions;