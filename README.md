# Lightening

## Procedural Generation for Static Charge Structure

#### References : 
1. [How Lightening Works - YouTube](https://youtu.be/h-0gNl5f4BU)
2. [Lightening - Wikipedia](https://en.wikipedia.org/wiki/Lightning)

#### How it works : 
###### Flood Fill : 
  [Flood Fill - Wikipedia](https://en.wikipedia.org/wiki/Flood_fill)
  
###### Modified Flood Fill : 
  The flood fill algorithm can also be used as a path finding algorithm if we assosciate weights(costs) to each step we take.
  This makes use of the basic principles of Greedy Algorithms to achieve (sub-)optimal results for the given scenario.
  
  *Consider the following example :*
  One wishes to travel from point A to B, when B is North-Westward of A.
  From any given position A can perform 8 possible moves
  1. North
  2. North-East
  3. East
  4. South-East
  5. South
  6. South-West
  7. West
  8. North-West
  
  But out of these moves the one the most profitable ergo the least costly is 
  >8. North-West
  
  Therefore we take one step in that direction.
  
  Now, we repeat the same process till we reach B.
  
###### Using the algorithm for Lightening :
  Consider that we have a charge structure laid out to us in a 2D space.
  Each position in this space has a specific value assosciated to it which determines how positive it is (Negative numbers are also judged based on how positive they are).
  Now given a starting position(origin), the lightening bolt will trace the path of least resistance(see 'cost' on line 14) to reach the most positive end before it dies out.
  From the origin we apply the modified flood fill to each and every point.
  We need not specify anything that explicitly defines the shape of the bolt.
  As the simulation runs on,the lightening bolt size grows via procedural generation.


