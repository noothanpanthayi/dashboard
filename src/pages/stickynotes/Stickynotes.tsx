import React, { Fragment } from "react";
import styles from "./stickynotes.module.css";
import About from "./About";
import { Switch } from "@mui/material";
import { useStickyNotes } from "./useStickyNotes";
import { StickyNote } from "./types";

export const Stickynotes = () => {
  
  const {
    state,
    handleKeyDown,
    handleSwitch,
    deleteNote,
    removestickynotes,
    addNote,
    saveNote,
    handleDrop,
    handleDragStart,
  } = useStickyNotes();

  return (
    <>
      <About aboutHidden={true} />
      <div className={container}>
        <div className={buttons}>
          <button className={`${stickybtns} ${addnote}`} onClick={addNote}>
            Add Sticky Note
          </button>
          <div className={rwmode}>
            <span onClick={() => handleSwitch("d")} className={enableEditTxt}>
              Drag/Drop
            </span>
            <Switch
              checked={state.writable}
              onChange={() => handleSwitch("s")}
              color="default"
              inputProps={{ "aria-label": "Edit Toggle" }}
            />{" "}
            {
              <span
                onClick={() => handleSwitch("e")}
                className={disableEditTxt}
              >
                Edit Mode
              </span>
            }
            <div className={`${removenote}`} onClick={removestickynotes}>
              Remove All Sticky Notes
            </div>
          </div>
        </div>

        <div className={grid}>
          {state.stickynotes.map(
            ({ id, notes, color, tiltdeg }: StickyNote) => {
              const tiltangle = `rotate(${tiltdeg}deg)`;
              return (
                <Fragment key={id}>
                  <div
                    role="note"
                    draggable={!state.writable}
                    onDragStart={(e) => handleDragStart(e, id)}
                    onDrop={(e) => handleDrop(e, id)}
                    onDoubleClick={deleteNote}
                    onDragOver={(e) => e.preventDefault()}
                    id={id}
                    style={{
                      transform: tiltangle,
                      backgroundColor: `#${color}`,
                    }}
                    onFocus={() => (state.editmode = true)}
                    onBlur={saveNote}
                    contentEditable={state.writable}
                    onKeyDown={handleKeyDown}
                    suppressContentEditableWarning={true}
                    className={stickynote}
                    title={
                      state.writable
                        ? "Just Click and Start Writing"
                        : "Mouse Left Button Down, Drag and Drop"
                    }
                  >
                    {notes}
                  </div>
                </Fragment>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

const {
  stickynote,
  grid,
  container,
  stickybtns,
  addnote,
  removenote,
  buttons,
  disableEditTxt,
  enableEditTxt,
  rwmode,
} = styles;
