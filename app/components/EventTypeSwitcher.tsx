"use client";

import { Switch } from "@/components/ui/switch";
import { useFormState } from "react-dom";
import { UpdateEventTypeStatusAction } from "../actions";
import { useEffect, useTransition } from "react";
import { toast } from "sonner";

export function MenuActiveSwitch({
  initalChecked,
  eventTypeId,
}: {
  initalChecked: boolean;
  eventTypeId: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [state, action] = useFormState(UpdateEventTypeStatusAction, undefined);

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.message);
    } else if (state?.status === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Switch
      defaultChecked={initalChecked}
      disabled={isPending}
      onCheckedChange={(isChecked) => {
        startTransition(() => {
          action({
            isChecked: isChecked,
            eventTypeId,
          });
        });
      }}
    />
  );
}
