import graph from "./images/graph.png";
import primes from "./images/primes.jpg";
import sort from "./sort.png";
import binSearch from "./images/binaryTree.png";
import convex from "./images/convexHull.png";

import queue from "./images/queue.png";
import stack from "./images/stack.png";
import deque from "./images/deque.png";
import array from "./images/array.png";
import circular from "./images/circular.png";
import quiz from "./images/quiz.png";
import info from "./images/info.png";
export function getDetails() {
  return [
    {
      id: 1,
      title: "Pathfinder",
      description: "Visualize graph algorithms like dijkstra, BFS, DFS",
      route: "/pathfinder",
      img: graph
    },
    {
      id: 2,
      title: "Prime Numbers",
      description: "Visualize how Seive is better than brute force",
      route: "/prime",
      img: primes
    },
    {
      id: 3,
      title: "Sorting Algorithm",
      description: "Compare different sorting algorithms",
      route: "/sort",
      img: sort
    },
    //    {
    //        id:9,
    //        title:"Recursive Sorting",
    //        description:"Compare different recursive sorting algorithms",
    //        route:"/recursivesort",
    //        img:sort
    //    },
    //    {
    //        id:4,
    //        title:"N Queen",
    //        description:"The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
    //        route:"/nqueen",
    //        img:queen
    //    },
    {
      id: 5,
      title: "Convex Hull",
      description:
        "The convex hull of a set of points is the smallest convex polygon that contains all the points of it",
      route: "/convexhull",
      img: convex
    },
    {
      id: 7,
      title: "Tree Traversal",
      description:
        "Binary search is an efficient algorithm for finding an item from a sorted list of item",
      route: "/binarysearch",
      img: binSearch
    },
    {
      id: 8,
      title: "Queue",
      description:
        "Binary search is an efficient algorithm for finding an item from a sorted list of item",
      route: "/queue",
      img: queue
    },
    {
      id: 9,
      title: "Array",
      description:
        "Binary search is an efficient algorithm for finding an item from a sorted list of item",
      route: "/array",
      img: array
    },
    {
      id: 10,
      title: "Circular Queue",
      description:
        "Binary search is an efficient algorithm for finding an item from a sorted list of item",
      route: "/circularqueue",
      img: circular
    },
    {
      id: 11,
      title: "Deque",
      description:
        "Binary search is an efficient algorithm for finding an item from a sorted list of item",
      route: "/deque",
      img: deque
    },
    {
      id: 12,
      title: "Stack",
      description:
        "Binary search is an efficient algorithm for finding an item from a sorted list of item",
      route: "/stack",
      img: stack
    },
    {
      id: 13,
      title: "Quiz",
      description: "Assessment based on algorithms",
      route: "/quiz",
      img: quiz
    },
    {
      id: 14,
      title: "Information",
      description: "Information based on algorithms",
      route: "/info",
      img: info
    }
    //
    //    {
    //        id:6,
    //        title:"Sudoku",
    //        description:"Coming soon...",
    //        route:"/",
    //        img:sudoku
    //    },

    //    {
    //        id:8,
    //        title:"15 Puzzle",
    //        description:"Coming soon...",
    //        route:"/",
    //        img:puzzle
    //    }
  ];
}
