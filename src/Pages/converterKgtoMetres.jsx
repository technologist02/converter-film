import { useState, useLayoutEffect } from "react"

export const ConvertKG = () => {
    const [thickness, setThickness] = useState()
    const [width, setWidth] = useState()
    const [density, setDensity] = useState()
    const [weight, setWeight] = useState()
    const [length, setLength] = useState("")
    const [area, setArea] = useState("")
    const [weightFocus, setWeightFocus] = useState(true)
    const [lengthFocus, setLengthFocus] = useState(false)
    const [areaFocus, setAreaFocus] = useState(false)
    
    const flags = [weightFocus, lengthFocus, areaFocus]
    let index = flags.findIndex(x => x === true)

    const getLength = () => {
        const result = weightFocus? Math.ceil(weight / (density * width * thickness ) * 1000000) : Math.ceil(area / (width / 1000))
        isNaN(result)? setLength(0) : setLength(result)
    }

    const getArea = () => {
        const result = weightFocus? Math.ceil(weight /(density * thickness) * 1000) : Math.ceil(length * (width / 1000))
        isNaN(result)? setArea(0) : setArea(result)
    }

    const getWeight = () => {
        const result = lengthFocus? Math.ceil(length * width * density * thickness / 1000000) : Math.ceil(area * thickness * density / 1000)
        isNaN(result)? setWeight(0) : setWeight(result)
    }

    function changeLogic() {
        switch(index) {
            case 0:
                getLength(); getArea();
                break;
            case 1:
                getWeight(); getArea();
                break;
            case 2:
                getLength(); getWeight()
                break;
            default:
                break;
        }
        //console.log("changed");
    }
    useLayoutEffect(changeLogic, [flags, density, thickness, width])
    
    return (
        <div style={{marginLeft : "1rem", marginTop:"1rem", width : "350px"}}>
            <h4 style={{textAlign:"center"}}>Перевести кг в погонные или квадратные метры</h4>
            <div className="item">
                <label htmlFor="thickness">Толщина, мкм</label>
                <input id="thickness"
                    type="text"
                    placeholder="45"
                    value={thickness}
                    onChange={(event) => setThickness(event.target.value)}
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
                <label htmlFor="weight">Вес, кг</label>
                <input id="weight"
                    type="text"
                    placeholder="1000"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    onFocus={() => {setWeightFocus(true); setLengthFocus(false); setAreaFocus(false)}}
                />
            </div>
            <div className="item">
                <label htmlFor="length">Длина, м.п.</label>
                <input id="length"
                    type="text"
                    placeholder="1000"
                    value={length}
                    onChange={(event) => setLength(event.target.value)}
                    onFocus={() => {setWeightFocus(false); setLengthFocus(true); setAreaFocus(false)}}
                    
                />
            </div>
            <div className="item">
                <label htmlFor="area">Площадь, м2</label>
                <input id="area"
                    type="text"
                    placeholder="1000"
                    value={area}
                    onChange={(event) => setArea(event.target.value)}
                    onFocus={() => {setWeightFocus(false); setLengthFocus(false); setAreaFocus(true)}}
                    
            />
            </div>
        </div>
    )
}