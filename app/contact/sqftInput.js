"use client";

import styles from "./page.module.css";

const SqftInput = () => {
  const preventNumberChangeWithScroll = (e) => {
    e.target.blur();
  };

  return (
    <input
      type="number"
      id="areaInSqft"
      name="areaInSqft"
      onWheel={preventNumberChangeWithScroll}
      step="0.01"
      className={styles.formInput1}
      required
    />
  );
};

export default SqftInput;
