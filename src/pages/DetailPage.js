import React from 'react';
import './Button.css';
import Navbar from '../component/Navbar'

const DetailPage = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            
            <div>
                <div class="container-fluid">

                    <div class="row justify-content-center">
                        <div class="col-md-4 m-5">
                        <img variant="top" src="images/mouse.png" style={{width: "400px",height: "500px"}} />
                        </div>
                        <div class="col-md-4 m-5">
                        <div class="row">
                                <h2 class="text-danger" >Mouse</h2>
                                <p>stok : 500</p>
                        </div>
                        <div class="row mt-2 text-white">
                               
                                <p>- Wireless Mouse </p>
                                <p> - Konektivitas wireless 2.4 GHz</p>
                                <p> - Jarak wireless hingga 10 m </p> 
                                <p>  - Plug and Play</p>  
                                <p>  - Baterai tahan hingga 12 bulan</p>
                        </div>
                        <div class="row mt-3 text-white" style={{textAlign: "justify"}}>
                                 <p>Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.</p>
                        </div>
                        <div class="d-flex flex-row-reverse bd-highlight text-danger">
                                 <p>Rp. 309.000</p>
                        </div>
                        <div class="row mt-3" >
                            <button class="buttonBuy">Buy</button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            
        
        </div>
    )
}

export default DetailPage;