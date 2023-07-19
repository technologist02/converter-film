import { useState, useLayoutEffect } from "react"

export const RollDiameter = () => {
    const [thicknessFlim, setThicknessFlim] = useState()
    const [width, setWidth] = useState()
    const [density, setDensity] = useState()
    const [diameterRoll, setDiameterRoll] = useState()
    const [diameterSleeve, setDiameterSleeve] = useState()
    const [thicknessSleeve, setThicknessSlive] = useState()
    const [weight, setWeight] = useState()
    const [length, setLength] = useState()
    const [area, setArea] = useState()
    

    const getWeight = () => {
        const d = +diameterSleeve
        const square = (((diameterRoll * diameterRoll) / 4)) - (((d + (+thicknessSleeve * 2)) * (d + (+thicknessSleeve * 2))) / 4)
        const result = Math.PI * square * (+density) * width / 1000000 // делим на миллион - перевод плотности из г/см3 в кг/м3 и ширина из мм в метры
        isNaN(result)? setWeight(0) : setWeight(result.toFixed(2))
    }

    const getLength = () => {
        const d = +diameterSleeve
        const square = (((diameterRoll * diameterRoll) / 4)) - (((d + (+thicknessSleeve * 2)) * (d + (+thicknessSleeve * 2))) / 4)
        const result = Math.PI * square / thicknessFlim
        isNaN(result)? setLength(0) : setLength(result.toFixed(2))
    }

    const getArea = () => {
        const d = +diameterSleeve
        const squareFaceRoll = (((diameterRoll * diameterRoll) / 4)) - (((d + (+thicknessSleeve * 2)) * (d + (+thicknessSleeve * 2))) / 4)
        const result = Math.PI * squareFaceRoll *  (width/1000) / thicknessFlim
        isNaN(result)? setArea(0) : setArea(result.toFixed(2))
    }

    useLayoutEffect(() => {getWeight(); getLength(); getArea()}, [thicknessFlim, width, density, diameterRoll, diameterSleeve, thicknessSleeve])

    return(
        <div style={{marginLeft : "1rem", marginTop:"1rem", width : "350px"}}>
            <h4 style={{textAlign:"center"}}>Вычислить вес и длину намотки по диаметру рулона</h4>
            <div className="item">
                <label htmlFor="thickness">Толщина, мкм</label>
                <input id="thickness"
                    type="text"
                    placeholder="45"
                    value={thicknessFlim}
                    onChange={(event) => setThicknessFlim(event.target.value)}
                />
            </div>
            <div className="item">
                <label htmlFor="width">Ширина, мм</label>
                <input id="width"
                    type="text"
                    placeholder="1000"
                    value={width}
                    onChange={(event) => setWidth(event.target.value)}
                />
            </div>
            <div className="item">
                <label htmlFor="density">Плотность, г/см3</label>
                <input id="density"
                    type="text"
                    placeholder="0.920"
                    value={density}
                    onChange={(event) => setDensity(event.target.value)}
                />
            </div>
            <div className="item">
                <label htmlFor="diamRoll">Диаметр рулона, мм</label>
                <input id="diamRoll"
                    type="text"
                    placeholder="600"
                    value={diameterRoll}
                    onChange={(event) => setDiameterRoll(event.target.value)}
                />
            </div>
            <div className="item">
                <label htmlFor="diamSleeve">Диаметр шпули, мм</label>
                <input id="diamSleeve"
                    type="text"
                    placeholder="152"
                    value={diameterSleeve}
                    onChange={(event) => setDiameterSleeve(event.target.value)}
                />
            </div>
            <div className="item">
                <label htmlFor="thickSleeve">Толщина стенки шпули, мм</label>
                <input id="thickSleeve"
                    type="text"
                    placeholder="12"
                    value={thicknessSleeve}
                    onChange={(event) => setThicknessSlive(event.target.value)}
                />
            </div>
            <div className="item"> 
                <label htmlFor="weight">Вес, кг</label>
                <input id="weight"
                    type="text"
                    placeholder="1000"
                    value={weight}
                    readOnly
                />
            </div>
            <div className="item">
                <label htmlFor="length">Длина, м.п.</label>
                <input id="length"
                    type="text"
                    placeholder="1000"
                    value={length}
                    readOnly
                />
            </div>
            <div className="item">
                <label htmlFor="area">Площадь, м2</label>
                <input id="area"
                    type="text"
                    placeholder="1000"
                    value={area}
                    readOnly   
            />
            </div>
        </div>
    )
}