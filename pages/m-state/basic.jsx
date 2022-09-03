import { createContext, useState } from "react";
const mahasiswa = createContext();
const fakultas = createContext();
const prodi = createContext();
const Index = () => {
    const [mhs, setMhs] = useState();
    const changeMahasiswa = e => setMhs(e.target.value);
    const mhsState = {mhs, changeMahasiswa};
    
    const [fks, setFakultas] = useState();
    const changeFakultas = e => setFakultas(e.target.value);
    const fakultasState = {fks, changeFakultas};

    const [prod, setProdi] = useState();
    const changeProdi = e => setProdi(e.target.value);
    const prodiState = {prod, changeProdi};
    
    return(
        <mahasiswa.Provider value={mhsState}>
            <fakultas.Provider value={fakultasState}>
                <prodi.Provider value={prodiState}>
                    <h2>Basic Management State with Hook React</h2>
                    <div className="grid grid-flow-row auto-rows-max">
                        <Mahasiswa/>
                        <Fakultas/>
                        <Prodi/>
                        <Card/>
                    </div>
                </prodi.Provider>
            </fakultas.Provider>
        </mahasiswa.Provider>
    )
}

const Mahasiswa = () => {
    return(
        <mahasiswa.Consumer>
            {
            (props) => {
                return(
                    <div className="m-3">
                        <label className="mr-2">Pilih Mahasiswa</label>
                        <select className="select select-accent w-full max-w-xs" value={props.mhs} onChange={props.changeMahasiswa}>
                            <option value={"Ramadansyah"}>Ramadansyah</option>
                            <option value={"Kadarisman"}>Kadarisman</option>
                            <option value={"Irlan"}>Irlan</option>
                            <option value={"Riski"}>Riski</option>
                        </select>
                    </div>
                )
            }
        }
        </mahasiswa.Consumer>
    )
}

const Fakultas = () => {
    return(
        <fakultas.Consumer>
            {
            (props) => {
                return(
                    <div className="m-3">
                        <label className="mr-2">Pilih Fakultas</label>
                        <select className="select select-accent w-full max-w-xs" value={props.fks} onChange={props.changeFakultas}>
                            <option value={"Teknik Informatika"}>Teknik Informatika</option>
                            <option value={"Sistem Informasi"}>Sistem Informasi</option>
                            <option value={"Jaringan Komputer"}>Jaringan Komputer</option>
                            <option value={"Ilmu Politik"}>Ilmu Politik</option>
                            <option value={"Ekonomi Perbankan"}>Ekonomi Perbankan</option>
                        </select>
                    </div>
                )
            }
        }
        </fakultas.Consumer>
    )
}

const Prodi = () => {
    return(
        <prodi.Consumer>
            {
            (props) => {
                return(
                    <div className="m-3">
                        <label className="mr-2">Pilih Prodi</label>
                        <select className="select select-accent w-full max-w-xs" value={props.prod} onChange={props.changeProdi}>
                            <option value={"Ilmu Komputer"}>Ilmu Komputer</option>
                            <option value={"Ekonomi"}>Ekonomi</option>
                            <option value={"Politik"}>Politik</option>
                        </select>
                    </div>
                )
            }
        }
        </prodi.Consumer>
    )
}

const Card = () => {
    return(
        <mahasiswa.Consumer>
            {
                props =>{
                    return(
                        <fakultas.Consumer>
                        {
                            fak => {
                                return(
                                    <prodi.Consumer>
                                    {
                                        prodi => {
                                            return(
                                                <div className="pl-10">
                                                    <h2>Hasil Pilihan</h2>
                                                    Mahasiswa : {props.mhs}<br/>
                                                    Fakultas : {fak.fks}<br/>
                                                    Prodi : {prodi.prod}<br/>
                                                </div>
                                            )
                                        }
                                    }
                                  </prodi.Consumer>
                                )                             
                            }
                        }
                        </fakultas.Consumer>
                    )
                }
            }
        </mahasiswa.Consumer>
    )
}

export default Index