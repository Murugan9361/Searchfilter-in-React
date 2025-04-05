// Task 2: Search Filter with Optimized Rendering (useState, useMemo, useCallback)
// Requirements:
// Display a list of names.

// Add a search input field to filter the list.

// Optimize filtering using useMemo.

// Use useCallback to prevent unnecessary re-renders of the search function.

// Hints:

// Store the list and search query in useState.

// Use useMemo to optimize filtering.

// Use useCallback for the filtering function to prevent unnecessary re-renders.
// names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];
import React, { useState, useMemo, useCallback } from "react";

export default function SearchFilter() {
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];

  const [query, setQuery] = useState("");

  // useMemo directly inside component
  const filteredNames = useMemo(() => {
    return names.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);
  //  usecallback using the onchange Event
  const handlequery = useCallback((e) => {
    setQuery(e.target.value);
  }, []);
  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="search a text"
        onChange={handlequery}
      />
      {
        <ul>
          {
            filteredNames.map((name)=>{
              return(
                <li key={name}>{name}</li>
              )
            })
          }
        </ul>
      }
    </div>
  );
}
