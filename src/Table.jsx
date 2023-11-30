/* eslint-disable react/prop-types */
import React, { memo, useState } from "react";

function TableRow({ obj, onDelete, onUpdate }) {
  const [editID, setEditId] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [title, setActualTitle] = useState(obj.title);
  const [editingTitle, setEditingTitle] = useState(obj.title);

  const handleDelete = () => {
    onDelete(obj.id);
    setDeleted(true);
  };

  const handleUpdate = () => {
    onUpdate(obj.id, editingTitle);
    setActualTitle(editingTitle);
    setEditId(false);
  };

  return (
    !deleted && (
      <tr>
        <td className="border border-gray-300 p-4">{obj.id}</td>
        <td className="border border-gray-300 p-4">
          {editID ? (
            <input
              type="text"
              value={editingTitle}
              onChange={(e) => setEditingTitle(e.target.value)}
            />
          ) : (
            title
          )}
        </td>

        <td className="border border-gray-300 p-4">{obj.userId}</td>
        <td className="flex gap-2 border border-gray-300 p-4">
          <button className=" logo" type="submit" onClick={handleDelete}>
            DELETE
          </button>

          {editID ? (
            <button
              className="bg-green-600 text-white p-2 px-4  rounded-md"
              type="submit"
              onClick={handleUpdate}
            >
              Save
            </button>
          ) : (
            <button
            type="submit"
              className="bg-blue-600 text-white p-2 px-4 logo  rounded-md"
              onClick={() => setEditId(true)}
            >
              Edit
            </button>
          )}
        </td>
      </tr>
    )
  );
}

const MemoizedTableRow = memo(TableRow);
export default MemoizedTableRow;
