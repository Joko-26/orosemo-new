import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSelect() {
  const { lang, setLang, availableLangs, t } = useLanguage();
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" className="cursor-pointer w-[150px] justify-between">
          {availableLangs.find(l => l.code === lang)?.name ?? t.language}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandInput placeholder={t.language} />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {availableLangs.map(l => (
              <CommandItem
                className="cursor-pointer"
                key={l.code}
                onSelect={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
              >
                {l.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}