export const days={
    date: String("0" + new Date().getDate()).slice(-2),
    tomorrow: String("0" + (new Date().getDate()+1)).slice(-2),
    thedayafter: String("0" + (new Date().getDate()+2)).slice(-2),

    month : String("0" + (new Date().getMonth() + 1)).slice(-2),
    year : new Date().getFullYear(),
    minmaxmonth:String("0" + (new Date().getMonth() + 3)).slice(-2),
    modalVisible: false,
}