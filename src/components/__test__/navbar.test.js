import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "@/components/Navbar.vue";

describe("NavBar", () => {
  it("renders the navigation bar", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.find("nav").exists()).toBe(true);
  });

  it("toggles menu when nav-icon is clicked", async () => {
    const wrapper = mount(NavBar);
    const navIcon = wrapper.find(".nav-icon");

    expect(wrapper.find(".dropdown-menu").exists()).toBe(false);

    await navIcon.trigger("click");
    expect(wrapper.find(".dropdown-menu").exists()).toBe(true);

    await navIcon.trigger("click");
    expect(wrapper.find(".dropdown-menu").exists()).toBe(false);
  });
});
