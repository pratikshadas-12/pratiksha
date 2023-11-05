import React, { Component } from "react";

class Information extends Component {
  // componentDidMount() {
  //   this.navbarBrandChange();
  // }

  // navbarBrandChange() {
  //   this.refs.child.setNavBrand(this.state.viewID);
  // }

  render() {
    return (
      <>
        <div />

        <div>
          <h2 style={{ textAlign: "center", paddingRight: 20, paddingTop: 5 }}>
            Array
          </h2>
        </div>

        <div>
          <h2 style={{ textAlign: "left", paddingRight: 20, paddingTop: 5 }}>
            Description
          </h2>
          <div>
            <p
              style={{
                position: "center center",
                fontSize: 20,
                paddingLeft: 20
              }}
            >
              An array is a collection of items stored at contiguous memory
              locations. The idea is to store multiple items of the same type
              together. This makes it easier to calculate the position of each
              element by simply adding an offset to a base value, i.e., the
              memory location of the first element of the array (generally
              denoted by the name of the array). The base value is index 0 and
              the difference between the two indexes is the offset.
              <br />
              <br />
              For simplicity, we can think of an array as a fleet of stairs
              where on each step is placed a value (let’s say one of your
              friends). Here, you can identify the location of any of your
              friends by simply knowing the count of the step they are on.
            </p>
          </div>
        </div>

        <div>
          <h2 style={{ textAlign: "left", paddingRight: 20, paddingTop: 5 }}>
            Working
          </h2>
          <p
            style={{
              position: "center center",
              fontSize: 20,
              paddingLeft: 20
            }}
          >
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>
              The above diagram illustrates that:
            </span>
            <br />
            1. An array is a container of elements.
            <br />
            2. Elements have a specific value and data type, like “ABC”, TRUE or
            FALSE, etc.
            <br />
            3. Each element also has its own index, which is used to access the
            element.
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Array Operations:</span>
            <br />
            <br />
            <br />
            <br />
            <ol>
              <ul>
                {" "}
                <span style={{ fontWeight: "bold" }}>Read:</span> Checking out a
                data in a specific spot. For example, reading for “o” in the
                array above, the computer knows to look in index 4.
              </ul>
              <br />
              <ul>
                {" "}
                <span style={{ fontWeight: "bold" }}>Search:</span> Finds a type
                of value within the data structure. For example, looking for
                numbers in the Hello array would turn up with no findings.
              </ul>
              <br />
              <ul>
                {" "}
                <span style={{ fontWeight: "bold" }}>Insert: </span> Places
                another value in the data. For example, placing Hellow in the
                array above would add “w” in index 5.
              </ul>
              <br />
              <ul>
                {" "}
                <span style={{ fontWeight: "bold" }}>Delete:</span> Removes a
                value in our data structure. For example, removing “H” from
                hello would be ello (side note: deletion of a value h would
                actually involve another step of moving all the characters to
                left.
              </ul>
              <br />
            </ol>
          </p>
        </div>

        <div>
          <h2 style={{ textAlign: "left", paddingRight: 20, paddingTop: 5 }}>
            Complexity
          </h2>
          <p
            style={{
              position: "center center",
              fontSize: 20,
              paddingLeft: 20
            }}
          >
            An array is always of a fixed size; it does not grow as more
            elements are required. The programmer must ensure that only valid
            values in the array are accessed, and must remember the location in
            the array of each value. Arrays are basic types in most programming
            languages and have a special syntax for their use.
            <br />
            The computational complexity for writing to and accessing an array
            is O(1). No matter the number of elements in the array, the
            calculation to find the element in the array is single
            multiplication and addition.
          </p>
        </div>

        <div>
          <h2 style={{ textAlign: "left", paddingRight: 20, paddingTop: 5 }}>
            Applications
          </h2>
          <p
            style={{
              position: "center center",
              fontSize: 20,
              paddingLeft: 20
            }}
          >
            <ol>
              <li>
                {" "}
                Collection of all music songs in your phone stored in an array.
              </li>
              <br />
              <li>
                {" "}
                A Parking Lot is an example of an array with each index of the
                array storing whether a car is present or not. Or it may be used
                for some other functionality.{" "}
              </li>
              <br />
              <li> Chess is a 2D Array of 8*8.</li>
              <br />
              <li> Rubix Cube is an exampke of 3D array.</li>
              <br />
            </ol>
          </p>
        </div>
        <div>
          <h2 style={{ textAlign: "left", paddingRight: 20, paddingTop: 5 }}>
            Advantage
          </h2>
          <p
            style={{
              position: "center center",
              fontSize: 20,
              paddingLeft: 20
            }}
          >
            <ol>
              <li>
                {" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Code Optimization:
                </span>{" "}
                An array allows storing and access of a large number of values
                by writing a small piece of code instead of declaring each
                variable separately.
              </li>
              <br />
              <li>
                {" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Functionality:{" "}
                </span>{" "}
                Arrays are one of the most basic data structures and are used
                for processing many algorithms like searching and sorting,
                maximum and minimum values, reversing, etc. in simple and easy
                ways.
              </li>
              <br />
              <li>
                {" "}
                <span style={{ fontWeight: "bold" }}>Index-Based: </span> Arrays
                use an index-based data structure which helps to identify each
                of the elements in an array easily using the index.
              </li>
              <br />
            </ol>
          </p>
        </div>
        <div>
          <h2 style={{ textAlign: "left", paddingRight: 20, paddingTop: 5 }}>
            Disadvantage
          </h2>
          <p
            style={{
              position: "center center",
              fontSize: 20,
              paddingLeft: 20
            }}
          >
            <ol>
              <li>
                <span style={{ fontWeight: "bold" }}> Size is fixed:</span> An
                array is static in the sense that the size of an array is fixed.
                The memory allocated to an array cannot be expanded or shrunk.
                This does not allow storing extra data in case of any
                requirement. This may sometimes lead to loss of data if the
                allocated memory to an array is less than required.
              </li>
              <br />
              <li>
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  The problem in expansion:
                </span>{" "}
                If array size is required to be increased during the development
                process at a later stage, then the only option is to discard the
                present array and create a new array of an enlarged size that
                meets the requirement. But the possibility of changing the size
                again still exists as the application grows.
              </li>
              <br />
              <li>
                <span style={{ fontWeight: "bold" }}> Memory wastage: </span>{" "}
                The size of an array is declared at the beginning based on some
                requirement that can’t be changed. So the memory is allocated
                accordingly. But if at a later stage the size requirement
                becomes less then memory wastage happens. For example, for a
                declared array size of 50, if we get only 38 elements to store,
                there{" "}
              </li>
            </ol>
          </p>
        </div>
        <div>
          <h2 style={{ textAlign: "left", paddingRight: 20, paddingTop: 5 }}>
            Conclusion
          </h2>
          <p
            style={{
              position: "center center",
              fontSize: 20,
              paddingLeft: 20
            }}
          >
            Hence arrays are more efficient and beneficial when compared to
            linked lists and hash tables. They are faster and can be utilized
            anywhere. They store data of similar data types together and can be
            used anywhere in the code.
          </p>
        </div>
      </>
    );
  }
}

export default Information;
