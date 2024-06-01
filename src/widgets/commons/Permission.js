import { useState } from "react";

const Permission = (children, { role, permission, read=false, create=false, update=false, remove=false }) => {
  const [isHide, setIsHide] = useState(false);

  const p = {
    name: "finance",
    access: [
      {
        permission: "product",
        flag: "rwx",
        create: true,
        read: true,
        update: false,
        remove: false
      },
      {
        permission: "role",
        create: false,
        read: true,
        update: false,
        remove: false
      }
    ]
  }


  const check = () => {
    const { name, access } = p;

    if (name !== role) {
      setIsHide(true);
    }

    for (let a of access) {
      if (a.permission === permission) {
        setIsHide(true);
      }

      if (a.create === create) {
        setIsHide(true)
      }

      if (a.create !== create) {
        setIsHide(true)
      }
    }
  }
}