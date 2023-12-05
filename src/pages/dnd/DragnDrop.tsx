import React, { Fragment, useState } from "react";

const DragnDrop = () => {
  const data = [
    {
      id: "1001",
      make: "Toyota",
      model: "Camry",
      year: "2023",
    },
    {
      id: "1002",
      make: "Honda",
      model: "Accord",
      year: "2023",
    },
    {
      id: "1003",
      make: "Ford",
      model: "Fiesta",
      year: "2023",
    },
    {
      id: "1004",
      make: "Audi",
      model: "Fiesta",
      year: "2023",
    },
  ];

  const [auto, setAuto] = useState(data);

  type Auto = {
    id: string;
    make: string;
    model: string;
    year: string;
  };

  type cState = {
    draggedItem: any;
    data: { id: string; make: string; model: string; year: string }[];
  };

  const [state, setState] = useState<cState>({
    draggedItem: {},
    data,
  });

  let dragItemId: any;

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    dragItemId = id;

    const draggedItem = state.data.find((item) => {
      return item.id === id;
    });

    const { target } = e;
    if (target instanceof HTMLElement) {
      const classList = target.classList; // DOMTokenList
      classList.remove("redsquare");
    }

    setState((prev: any) => {
      return {
        ...prev,
        draggedItem,
      };
    });
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    const { target } = e;
    if (target instanceof HTMLElement) {
      const classList = target.classList; // DOMTokenList
      classList.remove("redsquare");
    }

    const tempState: any = { ...state };

    const draggedIndex = auto.findIndex((item) => {
      return item.id === state.draggedItem.id;
    });

    const droppedIndex = auto.findIndex((item) => {
      return item.id === id;
    });

    const droppedItem = state.data.find((item) => {
      return item.id === id;
    });

    tempState.data.splice(droppedIndex, 1, tempState.draggedItem);
    tempState.data.splice(draggedIndex, 1, droppedItem);

    //  e.target?.classList.remove('redsquare')

    setState((prevState) => {
      return {
        ...prevState,
        data: tempState.data,
      };
    });
  };

  const showHover = (e: any) => {
    e.target.classList.add("redsquare");

    e.preventDefault();
    e.stopPropagation();
  };

  const hideHover = (e: any) => {
    e.target.classList.remove("redsquare");

    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div style={{ marginTop: 50 }}>
      {auto.map(({ id, make, model, year }) => {
        return (
          <Fragment key={id}>
            <div
              className=""
              onDragStart={(e) => handleDragStart(e, id)}
              onDrop={(e) => handleDrop(e, id)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={showHover}
              onDragLeave={hideHover}
              draggable
              style={{
                background: "darkblue",
                color: "white",
                border: "solid 1px silver",
                padding: 10,
                width: 200,
                margin: 10,
              }}
            >
              {make}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default DragnDrop;
