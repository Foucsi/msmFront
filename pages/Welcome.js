import React from "react";
import { useSelector } from "react-redux";

export default function Welcome() {
  const users = useSelector((state) => state.user.value);
  return <div>Bonjour {users.username}!</div>;
}
