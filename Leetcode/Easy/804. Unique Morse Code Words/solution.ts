function uniqueMorseRepresentations(words: string[]): number {
    const morse_code_map = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--.."
    }

    const transformations = new Set()

    words.forEach((w) => {
        let str = ''
        w.split('').forEach((c) => {
            str += morse_code_map[c]
        })

        if (!transformations.has(str))
            transformations.add(str)
    })
    
    return transformations.size

};