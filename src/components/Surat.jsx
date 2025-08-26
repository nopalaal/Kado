import React from 'react'
import { useParams } from 'react-router-dom'

function Surat(){
    const { id } = useParams();

    const renderLetter = () => {
        switch(id){
            case '1':
                return <p>Surat 1: Halo, ini surat pertama buat kamu.</p>
            case '2':
                return <p>Surat 2: Kamu hebat! Terus semangat ya.</p>
            case '3':
                return <p>Surat 3: Terima kasih sudah selalu ada.</p>
            case '4':
                return <p>Surat 4: Semoga harimu indah.</p>
            case '5':
                return <p>Surat 5: Happy Birthday! 🎉</p>
            default:
                return <p>Pilih salah satu surat di bawah ya.</p>
        }
    }

    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-white">
                {renderLetter()}
            </div>
        </>
    )
}
export default Surat