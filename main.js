import log, { error } from './funcoes'
import * as calc from './calc'

log(calc.soma(1, 2))

log(calc.subtracao(3, 2))

error(calc.divisao(3, 0))

log(calc.multiplicacao(2, 3))
