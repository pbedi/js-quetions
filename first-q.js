/*
    describe("f", function() {
        it("should work", function() {
        expect(f("l")).toEqual("fl");
        expect(f()("l")).toEqual("fol");
        expect(f()()("l")).toEqual("fool");
        expect(f()()("t")).toEqual("foot");
        expect(f()()()()()("l")).toEqual("foooool");
        // And so on such that the number of calls continues
        // to increase the number of letter "o" in the string 
        // until the function is called with a string.
    
        // BONUS: also the function should be stateless:
        var a = f()();
        expect(a("A")).toEqual("fooA");
        expect(a()()()("B")).toEqual("foooooB");
        expect(a()("C")).toEqual("foooC");
        });
    });
*/
function f(input) {  
    let result = 'f'
    let cf = (c) => {
        if (c) {
        return result + c
        }
        result += 'o'

        return cf
    }
   
    return cf(input)
}

console.log('calling f()()()()()("l") - will return "foooool"');

console.log('Ans= ' + f()()()()()("l"));

let a = f()();

console.log('calling a()()()("B") - will return "foooooB"');

console.log('Ans = ' + a()()()("B"));