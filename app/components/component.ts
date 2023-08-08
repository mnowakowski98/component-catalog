interface SupplyInfo {
    total: number
    available: number
}

interface ElectricalProperties {

}

export default interface Component {
    name: string
    electric: ElectricalProperties
    supply: SupplyInfo
}