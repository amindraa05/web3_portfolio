import React, { Component } from 'react'
import Crypto from '../assets/img/CryptoTable.PNG'
import Covid from '../assets/img/CovidTracker.jpeg'
import Jaga from '../assets/img/jaga.jpeg'
import Lindung from '../assets/img/lindung.jpeg'

class Karya extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="bungkus">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="karya-pic">
                                    <img src={Crypto} width={500}></img>
                                </div>
                            </div>
                            <div className="col">
                                <div className="karya-desc">
                                    <h2>Crypto Price Tracker</h2>
                                    <p className="karya-content">Web yang memantau pergerakan harga 100 koin cryptocurrency dengan market cap terbesar dan update setiap menitnya,
                                        menampilkan harga terkini,market cap,dan persentase perubahan harga 24 jam terakhir.
                                    </p>
                                    <a className="btn btn-warning first-link" href="https://eloquent-lumiere-1f87a3.netlify.app" target="_blank">
                                        Link Website (Deployed)
                                    </a>
                                    <a className="btn btn-dark" href="https://github.com/amindraa05/cryptoTable-Nextjs" target="_blank">
                                        <i class="fab fa-github"></i> Github Project Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bungkus">
                    <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="karya-pic pic-covid">
                                        <img src={Jaga} width={160}></img>
                                        <img src={Lindung} width={160}></img>
                                        <img src={Covid} width={160}></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="karya-desc">
                                        <h2>Covid Tracker Indonesia</h2>
                                        <p className="karya-content">Aplikasi android yang memantau data kasus covid di Indonesia mulai dari total kasus nasional,data positif,data pasien sembuh,data pasien dirawat di setiap provinsi di Indonesia
                                        </p>
                                        <a className="btn btn-dark" href="https://github.com/amindraa05/CovidTracker" target="_blank">
                                            <i class="fab fa-github"></i> Github Project Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Karya
