# js-quetions
JavaScript questions
# First
<pre>
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
 </pre>
# Second
When pass any string, the function return an object with unique key letters with number of times the letter was present in the string, ignore the numbers and case insnsitive:
getMyObjectCount('You Are an Expert') or getMyObjectCount('me 123 them')
