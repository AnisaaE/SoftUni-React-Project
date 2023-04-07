import { useState } from "react";
import useForm from "../../../hooks/useForm";

export function AddComment({onCommentSubmit}) {
  const { values, handleChange, handleSubmit, error }= useForm({
    comment:''
  }, onCommentSubmit)

  return (
    <div className="active-recipe__comments">
      <ul className="active-recipe__comment-list"></ul>
      <form className="active-recipe__comment-form" onSubmit={handleSubmit}>
        <textarea
          className="active-recipe__comment-input"
          name= 'comment'
          value={values.comment}
          onChange={handleChange}
          placeholder="Add a comment"
        ></textarea>
        <button className="active-recipe__comment-button">Submit</button>
      </form>
    </div>
  );
}
