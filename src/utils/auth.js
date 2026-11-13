
const USERS_KEY = "taskflow_users";
const SESSION_KEY = "taskflow_session";

const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const hashPassword = async (password, salt) => {
  const encoder = new TextEncoder();

  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const hash = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: encoder.encode(salt),
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );

  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

export const registerUser = async ({ name, email, password }) => {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.email === normalizedEmail
  );

  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  const salt = window.crypto.randomUUID();
  const passwordHash = await hashPassword(password, salt);

  const newUser = {
    id: window.crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    passwordHash,
    salt,
    createdAt: new Date().toISOString(),
  };

  saveUsers([...users, newUser]);

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
};

export const loginUser = async ({ email, password }) => {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const user = users.find(
    (item) => item.email === normalizedEmail
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const enteredHash = await hashPassword(password, user.salt);

  if (enteredHash !== user.passwordHash) {
    throw new Error("Invalid email or password.");
  }

  const session = {
    id: user.id,
    name: user.name,
    email: user.email,
    loggedInAt: new Date().toISOString(),
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));

  return session;
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
};

export const logoutUser = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const isAuthenticated = () => {
  return Boolean(getCurrentUser());
};
