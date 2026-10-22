function getDevEnv() {
  return import.meta.env.DEV;
}

// expose the callable method as return value
export { getDevEnv };
