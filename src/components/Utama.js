import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import Beranda from './Beranda'
import Karya from './Karya'
import Kontak from './Kontak'
import TentangSaya from './TentangSaya'

const Utama = () => {
    return(
    <Switch>
        <Route exact path="/" component={Beranda}></Route>
        <Route path="/beranda" component={Beranda}></Route>
        <Route path="/tentangsaya" component={TentangSaya}></Route>
        <Route path="/karya" component={Karya}></Route>
        <Route path="/kontak" component={Kontak}></Route>
    </Switch>
    )
}

export default Utama;
