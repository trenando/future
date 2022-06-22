import { Field, Form, Formik } from "formik";
import React from "react";
import { OnSubmit, SearchProps } from "./SearchTypes";
import { categoryValues, sortByValues } from "./selectorsValue";

export const Search: React.FC<SearchProps> = ({ search }) => {
  const onSubmit: OnSubmit = (value, setSubmitting) => {
    const payload = {
      ...value,
      startIndex: 0,
      maxResults: 30
    }
    search(payload, setSubmitting)
  }

  return (
    <Formik initialValues={{
      searchValue: "",
      category: categoryValues.all,
      sortBy: sortByValues.relevance
    }}
      onSubmit={(values, actions) => {
        onSubmit(values, actions.setSubmitting)
      }}
    >
      {({ isSubmitting }) => (
        <Form >
          <Field type="text" name="searchValue" placeholder="search" />
          <button type="submit" disabled={isSubmitting}>search</button>
          <div>
            <Field as="select" name="category">
              {
                Object.entries(categoryValues).map(([key, value]) => {
                  return <option key={key} value={value}>{value}</option>
                })
              }
            </Field>
            <Field as="select" name="sortBy">
              {
                Object.entries(sortByValues).map(([key, value]) => {
                  return <option key={key} value={value}>{value}</option>
                })
              }
            </Field>
          </div>
        </Form>
      )}
    </Formik >
  );
};
