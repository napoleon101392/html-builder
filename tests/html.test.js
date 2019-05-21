import { Html } from '../src/Html';

test('It should return a tr tag of data', () => {
 const Builder = Html.table({
  thead: {
   attribute: {
    id: "sample-id"
   },

   data: ["#", "User ID", "Title", "Completed"]
  },
  tbody: {
   attribute: {
    id: "tbody-id"
   },

   data: [
    [
     "1",
     "One",
     "Two",
     "Three"
    ],
    [
     "2",
     "Four",
     "Five",
     "Six"
    ]
   ]
  }
 });

 expect(Builder).toContain("<tr><td>1</td><td>One</td><td>Two</td><td>Three</td></tr><tr><td>2</td><td>Four</td><td>Five</td><td>Six</td></tr>");
});
