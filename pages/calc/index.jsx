import { useState, useEffect } from "react"
import Layout from "@/layouts/Layout"
import Monitor from "@/components/calc/Monitor";
import Button from "@/components/calc/Button";
import Input from "@/components/calc/Input";
const initialValues = {
    satu: "",
    dua: "",
};
const Calc = () => {
    const [values, setValues] = useState(initialValues);
    const [hasil, setHasil] = useState('');
    const [operasi, setOprasi] = useState('');

    const deleteValue = () => {        
        setValues(initialValues)
        setHasil('')
        setOprasi('')
    }

    const tambah = () => {
        if(values.satu != '' && values.dua != ''){                   
            const inputSatuNumber = parseInt(values.satu)
            const inputDuaNumber = parseInt(values.dua)
            if(!isNaN(inputSatuNumber) && !isNaN(inputDuaNumber)){                
                const result = inputSatuNumber + inputDuaNumber
                setHasil(result)
                setOprasi('+') 
            }else{
                alert('kedua inputan harus angka')
            }
           
        }else{  
             alert('kedua inputan tidak boleh kosong')
        }
    }

    const bagi = () => {
        if(values.satu != '' && values.dua != ''){                   
            const inputSatuNumber = parseInt(values.satu)
            const inputDuaNumber = parseInt(values.dua)
            if(!isNaN(inputSatuNumber) && !isNaN(inputDuaNumber)){                
                const result = inputSatuNumber / inputDuaNumber
                setHasil(result)
                setOprasi('/') 
            }else{
                alert('kedua inputan harus angka')
            }
           
        }else{  
             alert('kedua inputan tidak boleh kosong..')
        }
    }

    const kali = () => {
        if(values.satu != '' && values.dua != ''){                   
            const inputSatuNumber = parseInt(values.satu)
            const inputDuaNumber = parseInt(values.dua)
            if(!isNaN(inputSatuNumber) && !isNaN(inputDuaNumber)){                
                const result = inputSatuNumber * inputDuaNumber
                setHasil(result)
                setOprasi('x') 
            }else{
                alert('kedua inputan harus angka')
            }
           
        }else{  
             alert('kedua inputan tidak boleh kosong')
        }
    }

    return (
        <>
            <Layout>
                <section className="bg-white border-b py-4 flex flex-col pt-24">
                    <div className="w-6/12 p-4 mx-auto">
                        <Monitor satu={values.satu} dua={values.dua} hasil={hasil} operasi={operasi}/>
                        <Input setValues={setValues} values={values}/>
                        <Button tambah={tambah} kali={kali} bagi={bagi} deleteValue={deleteValue}/>

                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Calc