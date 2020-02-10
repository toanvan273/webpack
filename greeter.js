import moment from 'moment'

function greet(){
    var day = moment().format('dddd')
    console.log('Hello greet '+ day + '!')
}
export default greet