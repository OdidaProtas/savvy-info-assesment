import { useParams } from "react-router-dom";
import { AddressInterface, DummyInterface, Params, User } from "../types";
import { useStateItem, useStateValue } from "../data/store";

export default function useSuite({ dummy }: DummyInterface) {
  const { id } = useParams() as Params;
  const { users } = useStateValue();

  const user = useStateItem("users", dummy ? "1" : id) || {
    address: null
  };

  function getSuiteMembers() {
    return (users || [])
      .filter((u: User) => u.address.suite === user.address.suite)
      .filter(filterUnique);
  }

  function filterUnique(value: any, idx: number, self: any[]) {
    return self.indexOf(value) === idx;
  }

  const suite: AddressInterface = { ...user.address, members: getSuiteMembers() };

  return suite;
}
