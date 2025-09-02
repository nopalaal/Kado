import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Surat({ isAuthenticated, onAuthenticated }){
    const { id } = useParams();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const correctPassword = '03092006'; 

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            if (typeof onAuthenticated === 'function') {
                onAuthenticated();
            }
            setError('');
        } else {
            setError('Salahh wleeeeeeeeeee😝😝😝');
            setPassword('');
        }
    };

    const renderPasswordForm = () => {
        return (
            <div className="text-center mt-25">
                <h2 className="text-2xl mt-6 text-white item"> APANIEE 👀</h2>
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan password..."
                        className="px-4 py-2 rounded-lg border-2 border-pink-400 focus:outline-none focus:border-pink-600 text-black"
                        required
                    />
                    {error && <p className="text-white text-sm">{error}</p>}
                    <br></br>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-medium transition-colors"
                    >
                        Buka Surat 💌
                    </button>
                </form>
            </div>
        );
    };

    const renderLetter = () => {
        switch(id){
            case '1':
                return(<>
                <span className='flex absolute top-5 text-3xl'>Happy Birthdayyyyyyy!!!!!!! 🎂🥳🥳🥳</span>
                <p className='m-12'>Haiiiii Melisa Chiufin yang sudah seumuran heheh, SELAMAT ULANG TAHUN DI UMUR 19 God Bless you dan semoga di umur ini kamu menjadi Melisa yang lebih baik lagi ketimbang tahun lalu.
                    Aku senang banget bisa buatin sebuah yang special untuk kamu dan ini adalah hadiahku untuk kamu yang aku sayangin. Makasiii Melisa yang sudah berjuang sampai sekarang dan akhirnya kamu sudah memalui ini semua dengan usaha dan tenaga yang kamu sudah keluarkan.
                    Dengan umur kamu yang ke 19 bukan tandanya kamu harus setiap saat kuat yaa sayang namun semakin bertumbuh pikiran kamu akan lebih tangguh dan kuat mental yang dimana terbukti ketika kamu saat semester 1 kamu sering ngalamin kesulitan namun sekarang kamu HEBATT BANGETTTTT.
                    Intinyaa HAPPY BIRTHDAY SAYANGGKUUU 💖💞💕

                </p>
                </>)
            case '2':
                return(<>
                    <span className='flex absolute top-5 text-3xl'>Tema</span>
                    <p className='m-12'>mungkin kamu nanya kenapa tv?(ato ga😭) karena game favorit aku adalah <a href="https://store.steampowered.com/app/1113000/Persona_4_Golden/">Persona 4</a> dan itu mengambil sebuah kayak gimana ya😭 tapi kek keren WKWKWKWKWK GAAA GAA
                    jadi dalam ini karena kita sebagai manusia kita mempunyai hati nurani yang tersimpan mau itu jahat ataupun baik. Jadi kalo di gamenya tuh kita masuk kedalam TV nya untuk mengalahi atau melawan sifat terburuk kita dengan cara menerima sifat itu memanglah berada dalam diri kita.
                    Kamu nanya mungkin "KOK RIBET BANGET SIH ATAU WHAT?😭" tapi aku ngegambarin selama perjalanan hidup kamu ini tuh bagaikan kamu berkalana dalam dunia TV itu dengan melewati semua rintangan dan akhirnya bisa keluar dengan sifat yang lebih dewasa dan lebih baik lagii. </p>
                </>)
            case '3':
                return(<>
                    <span className='flex absolute top-5 text-3xl'>Untuk Melisa ketika Sedih</span>
                    <p className='m-12'>Sayang :( jangan sedii yaa akuu kalo liat kamu sedih tuh kadang aku juga ikut sedi tau😭. Melisaaa aku tau kadang memang sedi tuh ga bisa di kontrol apalagi kamu beberapa hari itu mengalami hal yang berat namun percaya deh dengan kamu bisa lewatin itu semua
                        kamu malah JADI VERSI MELISA YANG LEBIH BAIK LAGII LOH apalagi diri kamu tuh sebenernya orang yang tangguh BANGETTTTT mau pulang pergi dari kampus trus ikut organisasi pulaa EMANG MELISA KU TUH KEREN BANGET IHHHHH😭😭. Inget yaa Melisaa ada mama kamu yang selalu ada disamping kamu kapanpun itu dan juga Tuhan Yesus yang selalu menyertai kamuu,
                        Melisa juga gamaukann liat mama Melisa sedihkan :(( OLEH KARENA ITU KAMUU BISA KOKK LEWATIN INI SEMUAA, apalagi kamu ga sendirii kok ada Nenek kamu yang selalu menunggu kamu dirumah, temen temen kamu yang SERU SERU DAN <b>UNIK</b> dan 
                        juga ada Nopal yang selalu menunggu kabar kamu dan kehadiran Melisaaa.
                    </p>
                </>)
            case '4':
                return(<>
                    <span className='flex absolute top-5 text-3xl'>Dari Nopal ke Melisa</span>
                    <p className='m-12'>eloooo sayangg sekali lagi Happy Birthdayyyyyyy, aku cuma mau ucapin kalo aku tuh seneng banget bisa menjadi patner, pacar, jodoh, sahabat, dan orang paling kamu sebelkan at the same time 😭
                        tapi makasiiii yaaa kamu sudah memberikan aku kesempatan inii dan aku juga selalu bakal mencintai kamu kapanpun dan KITA pasti bisa lewatin semua badai cobaan yang telah diberikan untuk membuktikan kalo kita adalah pasangan yang layak dan bisa bertahan berbagai cobaan.
                        Aku seneng dimana kamu sekarang mulai terbuka juga sama aku, aku merasa menjadi Cowo yang berharga buat kamu 😭. dan Aku juga minta maaf kalo aku masih banyak melakukan kesalahan seperti ngambek sendiri 👉👈 trus bikin kamu kesel dan MASIH BANYAK LAGI YANG AKU GABISA SEBUTIN SATU SATU HEHE.
                        Aku seneng dimana hubungan kita tuh Healty banget yang kita selalu terbuka satu sama lain untuk menerima opini dan akan memperbaiki nya apabila ada yang salah, DAN SEKALI LAGI I LOVEE YOUU SOOOOOOOOO MUCHHHHHH and you will be my favorite girl dan akuu bakal selalu disamping kamu dan dihati kamu. <br></br> HAPPY BIRTHDAY MY LOVELY GIRLL EVER 💕💞💖
                    </p>
                </>)
            default:
                return <p className='flex justify-center items-center'>Pilih salah satu surat di bawah ya.</p>
        }
    }

    return(
        <>
            <div className="w-full h-[500px] flex flex-col items-center bg-pink-300 justify-centerbg-purple-300 p-6 pt-8 pb-12 overflow-hidden">
                {!isAuthenticated ? renderPasswordForm() : renderLetter()}
            </div>
        </>
    )
}
export default Surat