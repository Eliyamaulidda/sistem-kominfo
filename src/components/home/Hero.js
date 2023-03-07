import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import gbr1 from './Assets/we.png';

const Hero = () => {
    return(
        <section>
            <div className="section container">
            <div className="row">
            <div className="hero d-flex justify-content-center mt-5">
                <div className="pt-5 col-lg-5 col-md-6 col-sm-12">
                    <h2 className="fw-bold mt-5">Temukan Aplikasi Yang Anda Cari</h2>
                    <p className='mt-3 text-muted'>Dinas Kominfo Kabupaten Madiun kini menyediakan sebuah website helpdesk guna membantu masyarakat madiun untuk menemukan aplikasi atau web yang terdaftar di kabupaten madiun <br/> <em>#HarusSehat</em></p>
                      
                    <Button variant="primary" size="lg" active>
                        Layanan Pengajuan
                    </Button>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 gambar">
                    <img src={gbr1} alt='img2' className="gbr mt-5 float-end w-100" width={600}></img>
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Hero;