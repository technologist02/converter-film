import { NavLink } from "react-router-dom"

export function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/converterKgtoMetres" className="nav-link">Перевести Кг в метры</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/rollDiameter" className="nav-link">Рассчитать по диаметру рулона</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}