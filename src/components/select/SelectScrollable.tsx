import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Apparel and Footwear</SelectLabel>
          <SelectItem value="sportswear">Sportswear</SelectItem>
          <SelectItem value="footwear">Footwear</SelectItem>
          <SelectItem value="protective-gear">Protective Gear</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Equipment and Gear</SelectLabel>
          <SelectItem value="balls">Balls</SelectItem>
          <SelectItem value="rackets-bats">Rackets and Bats</SelectItem>
          <SelectItem value="clubs-sticks">Clubs and Sticks</SelectItem>
          <SelectItem value="nets-goals">Nets and Goals</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Fitness and Exercise Equipment</SelectLabel>
          <SelectItem value="cardio-machines">Cardio Machines</SelectItem>
          <SelectItem value="strength-training">
            Strength Training Equipment
          </SelectItem>
          <SelectItem value="yoga-pilates">Yoga and Pilates Gear</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Outdoor and Adventure Gear</SelectLabel>
          <SelectItem value="camping-equipment">Camping Equipment</SelectItem>
          <SelectItem value="water-sports">Water Sports Equipment</SelectItem>
          <SelectItem value="climbing-gear">Climbing Gear</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Accessories</SelectLabel>
          <SelectItem value="sports-bags">Sports Bags and Backpacks</SelectItem>
          <SelectItem value="water-bottles">
            Water Bottles and Hydration Packs
          </SelectItem>
          <SelectItem value="fitness-trackers">
            Fitness Trackers and Smartwatches
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Sports Nutrition and Wellness</SelectLabel>
          <SelectItem value="supplements">Supplements</SelectItem>
          <SelectItem value="hydration-products">Hydration Products</SelectItem>
          <SelectItem value="health-monitoring">
            Health Monitoring Devices
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
