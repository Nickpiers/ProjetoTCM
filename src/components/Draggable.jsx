import React, { useState, useEffect } from "react";

export const Draggable = ({ initialPos = { x: 0, y: 0 }, children }) => {
  const [pos, setPos] = useState(initialPos);
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState(null);

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    } else {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging]);

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    const rect = e.target.getBoundingClientRect();
    setDragging(true);
    setRel({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    e.preventDefault();
  };

  const onMouseUp = () => setDragging(false);

  const onMouseMove = (e) => {
    if (!dragging) return;
    setPos({ x: e.clientX - rel.x, y: e.clientY - rel.y });
    e.preventDefault();
  };

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        cursor: "grab",
        border: "2px solid #aa5",
        padding: "10px",
        backgroundColor: "#fff",
      }}
    >
      {children}
    </div>
  );
};
