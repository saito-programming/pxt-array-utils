//% color="#D84315" icon="\uf0cb" block="配列ユーティリティ"
namespace pxtArrayUtils {

    //% block="%array の中からいちばん大きい数"
    export function max(array: number[]): number {
        if (array.length == 0) {
            return 0
        }
        let tmp = array[0]
        for (let v of array) {
            if (v > tmp) {
                tmp = v
            }
        }
        return tmp
    }

    //% block="%array の中でいちばん大きい数がある位置"
    export function maxIndex(array: number[]): number {
        if (array.length == 0) {
            return -1 // 配列が空っぽのときは「なし（-1）」を返す
        }
        let tmp = array[0]
        let maxValue = max(array)

        for (let i = 0; i < array.length; i++) {
            if (array[i] == maxValue) {
                return i
            }
        }
        return -1
    }

    //% block="%array の中からいちばん小さい数"
    export function min(array: number[]): number {
        if (array.length == 0) {
            return 0
        }
        let tmp = array[0]
        for (let v of array) {
            if (v < tmp) {
                tmp = v
            }
        }
        return tmp
    }

    //% block="%array の中でいちばん小さい数がある位置"
    export function minIndex(array: number[]): number {
        if (array.length == 0) {
            return -1 // 配列が空っぽのときは「なし（-1）」を返す
        }
        let tmp = array[0]
        let minValue = min(array)

        for (let i = 0; i < array.length; i++) {
            if (array[i] == minValue) {
                return i
            }
        }
        return -1
    }
}
