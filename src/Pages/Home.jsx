export function Home() {
    const polymersDensity = [
        ["Полиэтилен LDPE", 0.92],
        ["Полипропилен BOPP", 0.91],
        ["BOPET", 1.4],
        ["Полиамид", 1.14]
    ]

    return (
    <div>
        <table className=" table table-bordered" style={{maxWidth:"400px"}}>
            <caption>Плотности некоторых видов полимерных пленок</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Материал</th>
                    <th scope="col">Плотность, г/см3</th>
                </tr>
            </thead>
            <tbody>
                {polymersDensity.map(item => (
                    <tr>
                        <th scope="row">{polymersDensity.indexOf(item) + 1}</th>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}