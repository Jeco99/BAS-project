import { useState } from "react";

export default function ProvinceDropdown({getData, setGetData}) {
    const provinceOption = [
        'Select',
        'Ajuy',
        'Alimodian',
        'Anilao',
        'Badiangan',
        'Balasan',
        'Banate',
        'Barotac Nuevo',
        'Barotac Viejo',
        'Batad',
        'Bingawan',
        'Cabatuan',
        'Calinog',
        'Carles',
        'Concepcion',
        'Dingle',
        'Dueñas',
        'Estancia',
        'Lemery',
        'Passi',
        'San Dionisio',
        'San Enrique',
        'San Joaquin',
        'San Miguel',
        'San Rafael',
        'Santa Barbara',
        'Sara']

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setGetData({
          ...getData,
          [name]: value,
        });
      };

    return (
        <div className="relative w-full ">
            <select
               className="w-full p-2.5 text-black-500 text-2xl bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                value={getData["province"]}
                onChange={handleChange}
                name="province"
            >
               {provinceOption.map((value) => (
                    <option key={value}>{value}</option>
                ) )}
            </select>
        </div>
    );
}